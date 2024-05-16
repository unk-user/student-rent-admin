import { Outlet } from 'react-router-dom';

function PropertiesPage() {
  return (
    <main className="flex flex-1 relative flex-col gap-2 overflow-x-auto">
      <Outlet />
    </main>
  );
}

export default PropertiesPage;
