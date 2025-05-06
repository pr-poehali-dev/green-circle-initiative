
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatLabel?: (value: number) => string;
  labelMin?: string;
  labelMax?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  formatLabel = (value) => value.toString(),
  labelMin = "От",
  labelMax = "До"
}) => {
  return (
    <div className="space-y-4 px-1">
      <Slider
        defaultValue={[min, max]}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={(newValue) => onChange(newValue as [number, number])}
        className="pt-6"
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Label htmlFor="min-range" className="text-xs text-slate-500 mb-1">{labelMin}</Label>
          <Input
            id="min-range"
            type="number"
            value={value[0]}
            onChange={(e) => onChange([
              Math.max(min, Math.min(parseInt(e.target.value) || min, value[1] - step)), 
              value[1]
            ])}
            className="w-24"
          />
        </div>
        <span className="text-slate-400 mt-4">—</span>
        <div className="flex flex-col">
          <Label htmlFor="max-range" className="text-xs text-slate-500 mb-1">{labelMax}</Label>
          <Input
            id="max-range"
            type="number"
            value={value[1]}
            onChange={(e) => onChange([
              value[0], 
              Math.max(value[0] + step, parseInt(e.target.value) || max)
            ])}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
