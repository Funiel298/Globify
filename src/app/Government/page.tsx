'use client'
import { Suspense } from 'react';
import Server from './serverPage'
import Loading from '@/components/Loading';

export default function Governemnt() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Server />
      </Suspense>
    </>
  );
}