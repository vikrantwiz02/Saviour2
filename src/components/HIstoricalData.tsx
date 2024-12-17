'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
]

export default function HistoricalData() {
  const [dataType, setDataType] = useState('incidents')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Data</CardTitle>
        <CardDescription>View past trends and statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <Select onValueChange={setDataType} defaultValue={dataType}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Select data type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="incidents">Incidents</SelectItem>
            <SelectItem value="resources">Resource Usage</SelectItem>
            <SelectItem value="responses">Response Times</SelectItem>
          </SelectContent>
        </Select>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

