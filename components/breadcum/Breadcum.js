"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Fade from "../animation/Fade";

const Breadcrumb = () => {
  const currentPath = usePathname();
  const pathSegments = currentPath.split('/').filter(Boolean);
 
  const breadcrumbs = [
    { href: '/', label: 'Home' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { href, label };
    }),
  ];

  return (
    <Fade direction="down" delay={0.6}>
      <nav className="w-fit mx-auto flex px-3 py-2 md:px-5 md:py-3 mb-6 md:mb-8 lg:mb-12 text-gray-700 border border-gray-200 rounded-lg bg-white shadow-sm">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="inline-flex items-center">
              <Link href={crumb.href} className={
                currentPath === crumb.href
                  ? "text-sm font-medium text-blue-600"
                  : "text-sm font-medium text-gray-700 hover:text-blue-400"
              }>
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <svg
                  className="w-4 h-4 text-gray-400 mx-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Fade>
  );
};

export default Breadcrumb;
