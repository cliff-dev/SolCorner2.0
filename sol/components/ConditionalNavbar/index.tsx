'use client';

import { usePathname } from 'next/navigation';
import MainNavbar from '@/components/MainNavbar';
import AuthNavbar from '@/components/AuthNavbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();


  const isAuthPage = pathname.startsWith('/sign-in') ||
                    pathname.startsWith('/sign-up') ||
                    pathname.startsWith('/forgot-password') ||
                    pathname.startsWith('/reset-password') ||
                    pathname.startsWith('/auth');

  return isAuthPage ? <AuthNavbar /> : <MainNavbar />;
}
