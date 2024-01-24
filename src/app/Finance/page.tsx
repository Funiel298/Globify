'use client'
import { Suspense } from 'react';
import Server from './serverPage'

export default function Finance() {
  return (
    <>
      <Suspense fallback={<p></p>}>
        <Server />
      </Suspense>
    </>
  );
}