
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', ineficiencia: 4000, otimizado: 2400 },
  { name: 'Fev', ineficiencia: 3000, otimizado: 1398 },
  { name: 'Mar', ineficiencia: 2000, otimizado: 9800 },
  { name: 'Abr', ineficiencia: 2780, otimizado: 3908 },
  { name: 'Mai', ineficiencia: 1890, otimizado: 4800 },
  { name: 'Jun', ineficiencia: 2390, otimizado: 3800 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-64 sm:h-80 bg-slate-900 p-4 rounded-md border border-slate-800">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorInefficiency" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#64748b" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderRadius: '4px', border: '1px solid #334155', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', textTransform: 'capitalize' }}
            itemStyle={{ color: '#f8fafc' }}
            formatter={(value: any, name: string) => [value, name === 'ineficiencia' ? 'Burocracia' : 'Adaptu']}
          />
          <Area 
            type="monotone" 
            dataKey="ineficiencia" 
            name="Burocracia"
            stroke="#64748b" 
            fillOpacity={1} 
            fill="url(#colorInefficiency)" 
            strokeWidth={2} 
          />
          <Area 
            type="monotone" 
            dataKey="otimizado" 
            name="Adaptu"
            stroke="#10b981" 
            fillOpacity={1} 
            fill="url(#colorOptimized)" 
            strokeWidth={2} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardPreview;
