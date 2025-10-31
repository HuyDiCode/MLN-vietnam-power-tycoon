export interface ImpactValues {
  finance: number
  energy: number
  satisfaction: number
  politics: number
}

export function calculateImpact(baseImpact: ImpactValues): ImpactValues {
  // Add small random variation to make game less predictable
  const variation = (baseValue: number) => {
    const randomFactor = (Math.random() - 0.5) * 0.2 // ±10% variation
    return Math.round(baseValue * (1 + randomFactor))
  }

  return {
    finance: variation(baseImpact.finance),
    energy: variation(baseImpact.energy),
    satisfaction: variation(baseImpact.satisfaction),
    politics: variation(baseImpact.politics),
  }
}
