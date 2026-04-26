import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

interface Skill {
  name: string;
  color: string;
}

interface PhysicsCanvasProps {
  skills: Skill[];
}

export default function PhysicsCanvas({ skills }: PhysicsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 0.4, scale: 0.001 },
    });
    engineRef.current = engine;

    const render = Render.create({
      canvas: canvasRef.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    // Create walls
    const wallThickness = 60;
    const walls = [
      // bottom
      Bodies.rectangle(
        dimensions.width / 2,
        dimensions.height + wallThickness / 2,
        dimensions.width + 100,
        wallThickness,
        { isStatic: true, render: { visible: false } }
      ),
      // left
      Bodies.rectangle(
        -wallThickness / 2,
        dimensions.height / 2,
        wallThickness,
        dimensions.height + 100,
        { isStatic: true, render: { visible: false } }
      ),
      // right
      Bodies.rectangle(
        dimensions.width + wallThickness / 2,
        dimensions.height / 2,
        wallThickness,
        dimensions.height + 100,
        { isStatic: true, render: { visible: false } }
      ),
      // top
      Bodies.rectangle(
        dimensions.width / 2,
        -wallThickness / 2,
        dimensions.width + 100,
        wallThickness,
        { isStatic: true, render: { visible: false } }
      ),
    ];

    Composite.add(engine.world, walls);

    // Create skill bodies
    const isMobile = dimensions.width < 600;
    const baseRadius = isMobile ? 28 : 40;

    const skillBodies = skills.map((skill, index) => {
      const radius = baseRadius + Math.random() * 10;
      const x = Math.random() * (dimensions.width - radius * 2) + radius;
      const y = -100 - index * 80;

      const baseColor = skill.color.startsWith("#") && skill.color.length > 7 
        ? skill.color.slice(0, 7) 
        : skill.color;

      const body = Bodies.circle(x, y, radius, {
        restitution: 0.6,
        friction: 0.1,
        frictionAir: 0.01,
        density: 0.002,
        render: {
          fillStyle: "transparent",
          strokeStyle: baseColor,
          lineWidth: 2,
        },
        label: skill.name,
      });

      // Store skill data on body
      (body as any).skillData = skill;
      (body as any).radius = radius;

      return body;
    });

    Composite.add(engine.world, skillBodies);

    // Mouse constraint for dragging
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Custom rendering for skill labels
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      if (!ctx) return;

      skillBodies.forEach((body) => {
        const skill = (body as any).skillData as Skill;
        const radius = (body as any).radius as number;
        const pos = body.position;

        // Draw glass circle
        ctx.save();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);

        // Helper to ensure valid hex (strip extra alpha if present)
        const baseColor = skill.color.startsWith("#") && skill.color.length > 7 
          ? skill.color.slice(0, 7) 
          : skill.color;

        // Glassmorphism fill
        const gradient = ctx.createRadialGradient(
          pos.x - radius * 0.3,
          pos.y - radius * 0.3,
          0,
          pos.x,
          pos.y,
          radius
        );
        gradient.addColorStop(0, `${baseColor}30`);
        gradient.addColorStop(1, `${baseColor}10`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Glow border
        ctx.strokeStyle = `${baseColor}90`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Outer glow
        ctx.shadowColor = baseColor;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${baseColor}40`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Text label
        ctx.fillStyle = "#ffffff";
        ctx.font = `${isMobile ? "10" : "12"}px 'Inter', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(skill.name, pos.x, pos.y);

        ctx.restore();
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [dimensions, skills]);

  return (
    <div ref={containerRef} className="physics-canvas-container">
      <canvas ref={canvasRef} className="physics-canvas" />
    </div>
  );
}
