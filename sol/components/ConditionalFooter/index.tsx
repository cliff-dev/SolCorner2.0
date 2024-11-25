'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();


  const isAuthPage = pathname.startsWith('/sign-in') ||
                    pathname.startsWith('/sign-up') ||
                    pathname.startsWith('/auth') ||
                    pathname.startsWith('/forgot-password') ||
                    pathname.startsWith('/reset-password');

  return isAuthPage ? null : <Footer />;
}
