import { cn } from '@/lib/utils';

export function SpotBlur({
  className,
  color,
  intensity,
}: {
  className?: string;
  color?: string;
  intensity?: 1 | 2 | 3;
}) {
  switch (intensity) {
    case 1:
      return (
        <>
          <div className={cn('absolute size-10 rounded-full blur-3xl', className)} style={{ backgroundColor: color }} />
        </>
      );
    case 2:
      return (
        <>
          <div className={cn('absolute size-10 rounded-full blur-3xl', className)} style={{ backgroundColor: color }} />
          <div className={cn('absolute size-10 rounded-full blur-3xl', className)} style={{ backgroundColor: color }} />
        </>
      );
    case 3:
      return (
        <>
          <div
            className={cn('absolute size-36 rounded-full blur-[60px]', className)}
            style={{ backgroundColor: color }}
          />
          <div
            className={cn('absolute size-16 rounded-full blur-[60px]', className)}
            style={{ backgroundColor: color }}
          />
          <div
            className={cn('absolute size-16 rounded-full blur-[60px]', className)}
            style={{ backgroundColor: color }}
          />
        </>
      );
    default:
      return (
        <div className={cn('absolute size-10 rounded-full blur-3xl', className)} style={{ backgroundColor: color }} />
      );
  }
}
