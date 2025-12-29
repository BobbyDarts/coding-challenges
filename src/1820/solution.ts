export function canShiftToGet(A: string, B: string): boolean {
  if (A.length !== B.length) return false;
  if (A.length === 0) return true;
  return (A + A).includes(B);
}
