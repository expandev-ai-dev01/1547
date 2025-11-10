import { Loader2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8',
  xl: 'size-12',
};

export const LoadingSpinner = ({ size = 'lg', className }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <Loader2Icon
        className={cn('animate-spin text-primary', sizeClasses[size], className)}
        aria-label="Carregando"
      />
    </div>
  );
};
