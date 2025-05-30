import { useState } from 'react';

export default function SampleCostCalculator() {
  const [pieces, setPieces] = useState(500);
  const [piecesPerSheet, setPiecesPerSheet] = useState(4);
  const [padCost, setPadCost] = useState(4.38);
  const [cutTime, setCutTime] = useState(5);
  const [laborRate, setLaborRate] = useState(50);
  const [setupPercent, setSetupPercent] = useState(15);

  const sheetCount = pieces / piecesPerSheet;
  const adjustedCutTime = cutTime * (1 + setupPercent / 100);
  const materialCost = sheetCount * padCost;
  const laborCost = adjustedCutTime * laborRate;
  const totalCost = materialCost + laborCost;
  const costPerSample = totalCost / pieces;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">Sample Cost Calculator</h2>
      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          Pieces
          <input type="number" value={pieces} onChange={e => setPieces(+e.target.value)} className="mt-1 w-full border rounded p-2" />
        </label>
        <label className="block">
          Pieces per Sheet
          <input type="number" value={piecesPerSheet} onChange={e => setPiecesPerSheet(+e.target.value)} className="mt-1 w-full border rounded p-2" />
        </label>
        <label className="block">
          Pad Cost ($)
          <input type="number" value={padCost} onChange={e => setPadCost(+e.target.value)} className="mt-1 w-full border rounded p-2" />
        </label>
        <label className="block">
          Cut Time (hrs)
          <input type="number" value={cutTime} onChange={e => setCutTime(+e.target.value)} className="mt-1 w-full border rounded p-2" />
        </label>
        <label className="block">
          Labor Rate ($/hr)
          <input type="number" value={laborRate} onChange={e => setLaborRate(+e.target.value)} className="mt-1 w-full border rounded p-2" />
        </label>
        <label className="block">
          Setup Percent (%)
          <input type="number" value={setupPercent} onChange={e => setSetupPercent(+e.target.value)} className="mt-1 w-full border rounded p-2" />
        </label>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <p><strong>Adjusted Cut Time:</strong> {adjustedCutTime.toFixed(2)} hrs</p>
        <p><strong>Material Cost:</strong> ${materialCost.toFixed(2)}</p>
        <p><strong>Labor Cost:</strong> ${laborCost.toFixed(2)}</p>
        <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
        <p><strong>Cost per Sample:</strong> ${costPerSample.toFixed(2)}</p>
      </div>
    </div>
  );
}