//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class Client {
  private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
    this.http = http ? http : window as any;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }

  /**
   * @return Success
   */
  productsAll(): Promise<Product[]> {
    let url_ = this.baseUrl + "/api/Products";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        "Accept": "text/plain"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processProductsAll(_response);
    });
  }

  protected processProductsAll(response: Response): Promise<Product[]> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (Array.isArray(resultData200)) {
          result200 = [] as any;
          for (let item of resultData200)
            result200!.push(Product.fromJS(item));
        }
        else {
          result200 = <any>null;
        }
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<Product[]>(null as any);
  }

  /**
   * @param body (optional) 
   * @return Success
   */
  productsPOST(body: ProductRequest | undefined): Promise<ProductResponse> {
    let url_ = this.baseUrl + "/api/Products";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "text/plain"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processProductsPOST(_response);
    });
  }

  protected processProductsPOST(response: Response): Promise<ProductResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = ProductResponse.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<ProductResponse>(null as any);
  }

  /**
   * @return Success
   */
  productsGET(id: number): Promise<ProductResponse> {
    let url_ = this.baseUrl + "/api/Products/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        "Accept": "text/plain"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processProductsGET(_response);
    });
  }

  protected processProductsGET(response: Response): Promise<ProductResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = ProductResponse.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<ProductResponse>(null as any);
  }

  /**
   * @param body (optional) 
   * @return Success
   */
  productsPUT(id: number, body: ProductRequest | undefined): Promise<ProductResponse> {
    let url_ = this.baseUrl + "/api/Products/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
      body: content_,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "text/plain"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processProductsPUT(_response);
    });
  }

  protected processProductsPUT(response: Response): Promise<ProductResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = ProductResponse.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<ProductResponse>(null as any);
  }

  /**
   * @return Success
   */
  productsDELETE(id: number): Promise<ProductResponse> {
    let url_ = this.baseUrl + "/api/Products/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "DELETE",
      headers: {
        "Accept": "text/plain"
      }
    };

    return this.http.fetch(url_, options_).then((_response: Response) => {
      return this.processProductsDELETE(_response);
    });
  }

  protected processProductsDELETE(response: Response): Promise<ProductResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = ProductResponse.fromJS(resultData200);
        return result200;
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      });
    }
    return Promise.resolve<ProductResponse>(null as any);
  }
}

export class Developer implements IDeveloper {
  developerId?: number;
  name!: string;

  constructor(data?: IDeveloper) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.developerId = _data["developerId"];
      this.name = _data["name"];
    }
  }

  static fromJS(data: any): Developer {
    data = typeof data === 'object' ? data : {};
    let result = new Developer();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["developerId"] = this.developerId;
    data["name"] = this.name;
    return data;
  }
}

export interface IDeveloper {
  developerId?: number;
  name: string;
}

export class Product implements IProduct {
  productId?: number;
  productName?: string | undefined;
  productOwnerName?: string | undefined;
  scrumMasterId?: number;
  scrumMaster?: ScrumMaster;
  productDevelopers?: ProductDeveloper[] | undefined;
  startDate?: Date;
  methodology?: string | undefined;

  constructor(data?: IProduct) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productId = _data["productId"];
      this.productName = _data["productName"];
      this.productOwnerName = _data["productOwnerName"];
      this.scrumMasterId = _data["scrumMasterId"];
      this.scrumMaster = _data["scrumMaster"] ? ScrumMaster.fromJS(_data["scrumMaster"]) : <any>undefined;
      if (Array.isArray(_data["productDevelopers"])) {
        this.productDevelopers = [] as any;
        for (let item of _data["productDevelopers"])
          this.productDevelopers!.push(ProductDeveloper.fromJS(item));
      }
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : <any>undefined;
      this.methodology = _data["methodology"];
    }
  }

  static fromJS(data: any): Product {
    data = typeof data === 'object' ? data : {};
    let result = new Product();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productId"] = this.productId;
    data["productName"] = this.productName;
    data["productOwnerName"] = this.productOwnerName;
    data["scrumMasterId"] = this.scrumMasterId;
    data["scrumMaster"] = this.scrumMaster ? this.scrumMaster.toJSON() : <any>undefined;
    if (Array.isArray(this.productDevelopers)) {
      data["productDevelopers"] = [];
      for (let item of this.productDevelopers)
        data["productDevelopers"].push(item.toJSON());
    }
    data["startDate"] = this.startDate ? this.startDate.toISOString() : <any>undefined;
    data["methodology"] = this.methodology;
    return data;
  }
}

export interface IProduct {
  productId?: number;
  productName?: string | undefined;
  productOwnerName?: string | undefined;
  scrumMasterId?: number;
  scrumMaster?: ScrumMaster;
  productDevelopers?: ProductDeveloper[] | undefined;
  startDate?: Date;
  methodology?: string | undefined;
}

export class ProductDeveloper implements IProductDeveloper {
  productScrumMasterId?: number;
  developerId?: number;
  developer?: Developer;
  productId?: number;

  constructor(data?: IProductDeveloper) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productScrumMasterId = _data["productScrumMasterId"];
      this.developerId = _data["developerId"];
      this.developer = _data["developer"] ? Developer.fromJS(_data["developer"]) : <any>undefined;
      this.productId = _data["productId"];
    }
  }

  static fromJS(data: any): ProductDeveloper {
    data = typeof data === 'object' ? data : {};
    let result = new ProductDeveloper();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productScrumMasterId"] = this.productScrumMasterId;
    data["developerId"] = this.developerId;
    data["developer"] = this.developer ? this.developer.toJSON() : <any>undefined;
    data["productId"] = this.productId;
    return data;
  }
}

export interface IProductDeveloper {
  productScrumMasterId?: number;
  developerId?: number;
  developer?: Developer;
  productId?: number;
}

export class ProductRequest implements IProductRequest {
  productName?: string | undefined;
  productOwnerName?: string | undefined;
  scrumMasterName?: string | undefined;
  developers?: string[] | undefined;
  startDate?: Date;
  methodology?: string | undefined;

  constructor(data?: IProductRequest) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productName = _data["productName"];
      this.productOwnerName = _data["productOwnerName"];
      this.scrumMasterName = _data["scrumMasterName"];
      if (Array.isArray(_data["developers"])) {
        this.developers = [] as any;
        for (let item of _data["developers"])
          this.developers!.push(item);
      }
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : <any>undefined;
      this.methodology = _data["methodology"];
    }
  }

  static fromJS(data: any): ProductRequest {
    data = typeof data === 'object' ? data : {};
    let result = new ProductRequest();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productName"] = this.productName;
    data["productOwnerName"] = this.productOwnerName;
    data["scrumMasterName"] = this.scrumMasterName;
    if (Array.isArray(this.developers)) {
      data["developers"] = [];
      for (let item of this.developers)
        data["developers"].push(item);
    }
    data["startDate"] = this.startDate ? formatDate(this.startDate) : <any>undefined;
    data["methodology"] = this.methodology;
    return data;
  }
}

export interface IProductRequest {
  productName?: string | undefined;
  productOwnerName?: string | undefined;
  scrumMasterName?: string | undefined;
  developers?: string[] | undefined;
  startDate?: Date;
  methodology?: string | undefined;
}

export class ProductResponse implements IProductResponse {
  productId?: number;
  productName?: string | undefined;
  productOwnerName?: string | undefined;
  scrumMasterName?: string | undefined;
  developers?: string[] | undefined;
  startDate?: Date;
  methodology?: string | undefined;

  constructor(data?: IProductResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productId = _data["productId"];
      this.productName = _data["productName"];
      this.productOwnerName = _data["productOwnerName"];
      this.scrumMasterName = _data["scrumMasterName"];
      if (Array.isArray(_data["developers"])) {
        this.developers = [] as any;
        for (let item of _data["developers"])
          this.developers!.push(item);
      }
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : <any>undefined;
      this.methodology = _data["methodology"];
    }
  }

  static fromJS(data: any): ProductResponse {
    data = typeof data === 'object' ? data : {};
    let result = new ProductResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productId"] = this.productId;
    data["productName"] = this.productName;
    data["productOwnerName"] = this.productOwnerName;
    data["scrumMasterName"] = this.scrumMasterName;
    if (Array.isArray(this.developers)) {
      data["developers"] = [];
      for (let item of this.developers)
        data["developers"].push(item);
    }
    data["startDate"] = this.startDate ? this.startDate.toISOString() : <any>undefined;
    data["methodology"] = this.methodology;
    return data;
  }
}

export interface IProductResponse {
  productId?: number;
  productName?: string | undefined;
  productOwnerName?: string | undefined;
  scrumMasterName?: string | undefined;
  developers?: string[] | undefined;
  startDate?: Date;
  methodology?: string | undefined;
}

export class ScrumMaster implements IScrumMaster {
  scrumMasterId?: number;
  name?: string | undefined;

  constructor(data?: IScrumMaster) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.scrumMasterId = _data["scrumMasterId"];
      this.name = _data["name"];
    }
  }

  static fromJS(data: any): ScrumMaster {
    data = typeof data === 'object' ? data : {};
    let result = new ScrumMaster();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["scrumMasterId"] = this.scrumMasterId;
    data["name"] = this.name;
    return data;
  }
}

export interface IScrumMaster {
  scrumMasterId?: number;
  name?: string | undefined;
}

function formatDate(d: Date) {
  return d.getFullYear() + '-' +
    (d.getMonth() < 9 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1)) + '-' +
    (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate());
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
  if (result !== null && result !== undefined)
    throw result;
  else
    throw new ApiException(message, status, response, headers, null);
}