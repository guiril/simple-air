'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();

  const originPlace = searchParams.get('originPlace');
  const destinationPlace = searchParams.get('destinationPlace');
  const departDate = searchParams.get('departDate');
  const returnDate = searchParams.get('returnDate');

  return '';
}
