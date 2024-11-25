'use client';

import Link from 'next/link';
import DeployButton from '@/components/deploy-button';
import { EnvVarWarning } from '@/components/env-var-warning';
import HeaderAuth from '@/components/header-auth';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';

export default function MainNavbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href="/">Solcorner</Link>
          <div className="flex items-center gap-2">
            <Link href="/listings">Listings</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DeployButton />
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
      </div>
    </nav>
  );
}
