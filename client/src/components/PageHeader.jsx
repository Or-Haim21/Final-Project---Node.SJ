import React from 'react'

const PageHeader = ({ title }) => {
    return (
        <div className="sticky h-15 top-0 flex items-center md:block px-14 md:p-4 bg-slate-100">
          <h1 className="text-lg lg:text-3xl">{title}</h1>
        </div>
      );
}

export default PageHeader