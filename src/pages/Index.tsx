
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { SocialMediaDashboard } from '@/components/SocialMediaDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-white font-inter">
      <SocialMediaDashboard />
    </div>
  );
};

export default Index;
