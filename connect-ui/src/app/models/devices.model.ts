export class Device {
  deviceId: number;
  boxId: string;
  status: string;
  macAddress1: string;
  macAddress2: string;
  deviceOnline: string;
  onLineDuration: string;
  deviceGroup: string;
  modelId: number;
  softwareVersion: string;
  hardwareVersion: string;
  cpuUsage: string;
  memoryUsage: string;
  storageUsage: string;
  audioMode: string;
  resolution: string;
  lastOffline: string;
  lastOnline: string;
  activeTime: string;
  udpAddress: string;
  timeZone: string;
  chipId: string;
  cardNumber: string;
  cardId: string;
  cardSno: string;
  connectedStatus: string;
  motherboardId: string;
  operatorId: string;
  factoryId: string;
  casId: string;
  totalElements: number;
  totalPages: number;
  features: Array<Feature>;
  factory: Factory;
  operator: Operator;
  model: Model;
  cas: Cas;
  feature: Array<Feature>;
}

class Factory {
  factoryId: number;
  name: string;
  code: string;
  description: string;
  contactNo: string;
  email: string;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  updatedBy: string;
}

class Operator {
  operatorID: number;
  name: string;
  code: string;
  description: string;
  contactNo: string;
  email: string;
  timeZone: string;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  updatedBy: string;
  masterOperator: boolean;
}

class Model {
  modelId: number;
  modelNo: string;
  modelName: string;
  dDR: string;
  chipSet: string;
  flash: string;
  hardwareVersion: string;
  thumbnailURL: string;
  specificationURL: string;
  description: string;
  modelType: string;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  updatedBy: string;
  fileInformation: Array<Object>;
  features: Array<Feature>;

}

class Cas {
  casId: number;
  casName:string;
  casType: string;
  regionCode: number
}

class Feature {
  featureId: number;
  featureName: string;
  description: string;
}
