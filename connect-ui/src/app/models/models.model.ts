export class Model {
  chipSet: string;
  dDR: string;
  description: string;
  features: Array<Feature>;
  flash: string;
  hardwareVersion: string;
  modelId: number;
  modelNo: string;
  modelType: string;
  specificationURL: string;
  thumbnailURL: string
}

class Feature {
  featureId: number;
  featureName: string;
  description: string;
}

