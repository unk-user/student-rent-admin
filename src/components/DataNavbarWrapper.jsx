function DataNavbarWrapper({ children }) {
  return (
    <div className="min-h-screen w-[340px] flex flex-col p-4 px-3 bg-gray-500">
      {children}
    </div>
  );
}

export default DataNavbarWrapper;
