import react from "react";

const Header = () => {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl font-bold text-transparent bg-primary bg-clip-text">
        TODO App
      </h1>
      <p className="text-muted-foreground">No pain, no gain!</p>
    </div>
  );
};

export default Header;
