'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { convertBreadcrumb } from '@/utils/helper';

interface Breadcrumbs {
    href: string;
    breadcrumb: string;
}

const Breadcrumbs = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumbs>>();

    useEffect(() => {
        if (router) {
            const linkPath = pathname.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav aria-label='breadcrumbs' className='my-4'>
            <ol className='breadcrumb flex flex-row text-base font-medium text-blue-500'>
                <li>
                    <Link href='/'>Home</Link>
                    <i className='bi bi-chevron-right text-black px-2'></i>
                </li>
                {breadcrumbs.map((breadcrumb: Breadcrumbs, index) => {
                    return (
                        <li key={breadcrumb.href}>
                            {index != breadcrumbs.length - 1 ? (
                                <div>
                                    <Link href='#'>{convertBreadcrumb(breadcrumb.breadcrumb)}</Link>
                                    <i className='bi bi-chevron-right text-black px-2'></i>
                                </div>
                            ) : (
                                <div>
                                    <div className={'text-black'}>
                                        {convertBreadcrumb(breadcrumb.breadcrumb)}
                                    </div>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;