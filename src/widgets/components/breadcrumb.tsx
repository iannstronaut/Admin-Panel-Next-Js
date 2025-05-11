type BreadcrumbProps = {
  title: string;
  icon: string;
  route: string;
};

export default function Breadcrumb(Breadcrumb: BreadcrumbProps) {
  return (
    <div className="flex items-center w-full p-4 bg-gradient-to-b from-blue-500 to-blue-600 rounded-md gap-2 shadow-md">
      <div className="bg-white rounded-md text-blue-500">
        <i className={`${Breadcrumb.icon} ri-2x p-2`}></i>
      </div>
      <div className="flex flex-col justify-between items-start">
        <p className="text-xs">{Breadcrumb.route}</p>
        <h1 className="font-bold text-2xl">{Breadcrumb.title}</h1>
      </div>
    </div>
  );
}
