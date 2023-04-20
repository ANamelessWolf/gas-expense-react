import React, { useState } from 'react'
import { Card } from './shared/Card';

export default function CarItem() {

    const [tankSize, setTankSize]= useState(40);
    const [carModel, setCarModel]= useState('Ikon 2012');
    const [carBrand, setCarBrand]= useState('Ford');

  return (
    <Card>
        <div className="text-display">{carModel}</div>
        <div className="text-display">{carBrand}</div>
        <div className="num-display">{tankSize}</div>
    </Card>
  )
}
