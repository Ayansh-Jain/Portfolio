import CustomCursor from "../CustomCursor";

export default function CustomCursorExample() {
  return (
    <div className="h-screen flex items-center justify-center">
      <CustomCursor />
      <p className="text-lg">Move your mouse to see the custom cursor</p>
    </div>
  );
}
