export default function Loading() {
  return (
    <div className="inset-0 z-50 h-screen flex flex-col items-center justify-center bg-opacity-80">
      <div className="absolute w-15 h-10 border-4 border-blue-400 border-t-transparent rounded-b-2xl animate-bounce">
        <div className="absolute w-15 h-10 border-4 border-blue-400 border-t-transparent rounded-b-2xl animate-bounce"></div>
      </div>
      <div className="absolute mb-10">
        <div className="flex flex-col gap-2 p-4 animate-bounce">
          <div className="w-8 h-12 border-l-8 border-t-8 border-b-8 border-blue-400 relative">
            <div className="absolute top-1/2 left-0 w-3/4 border-t-8 border-blue-400"></div>
          </div>
        </div>
      </div>

      <div className="w-full font-extrabold tracking-widest text-blue-400 animate-pulse flex items-center justify-center mt-25 ">
        . . . Eduvate Loading . . .
      </div>
    </div>
  );
}
