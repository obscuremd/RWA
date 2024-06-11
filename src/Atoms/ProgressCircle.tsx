import { Card, ProgressCircle } from '@tremor/react';

export const ProgressCircles = () => (
  <div className="relative">
    <ProgressCircle value={75} size="lg" color="red">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-sm font-medium text-violet-500">
            CK
        </span>
    </ProgressCircle>
  </div>
);