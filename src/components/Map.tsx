interface MapProps {
    route?: any; // Replace 'any' with a more specific type for your route data
  }
  
  export function Map({ route }: MapProps) {
    return (
      <div className="bg-gray-200 h-full w-full flex items-center justify-center">
        <p>Map Component (Route visualization to be implemented)</p>
      </div>
    )
  }
  
  