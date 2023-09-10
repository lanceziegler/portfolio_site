const interpolate = require('flubber');
import { MotionValue, useTransform } from 'framer-motion';

export const getIndex = (_: any, index: number) => index;

// Changed paths: string[] to any
export function useFlubber(progress: MotionValue<number>, paths: any) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}
