import { api, auth } from "apis";
import { API } from "apis/constant";

export class DocumentService {
  static async getAllTests( token ) {
    return new Promise( async ( resolve, reject ) => {
      try {
        const headers = auth( token );
        const response = await api.get( API.DOCUMENT, {
          headers: headers,
          params: {
            type: 1,
          },
        } );
        if ( response.status === 200 && response.data ) {
          resolve( response.data );
        } else {
          reject( response.data.message );
        }
      } catch ( error ) {
        reject( error.message );
      }
    } );
  }

  static async getAllAnswers( token ) {
    return new Promise( async ( resolve, reject ) => {
      try {
        const headers = auth( token );
        const response = await api.get( API.DOCUMENT, {
          headers: headers,
          params: {
            type: 0,
          },
        } );
        if ( response.status === 200 && response.data ) {
          resolve( response.data );
        } else {
          reject( response.data.message );
        }
      } catch ( error ) {
        reject( error.message );
      }
    } );
  }
  static async getById( id, token ) {
    return new Promise( async ( resolve, reject ) => {
      try {
        const headers = auth( token );
        const response = await api.get( API.DOCUMENT + `/${ id }`, {
          headers: headers,
        } );
        if ( response.status === 200 && response.data ) {
          resolve( response.data );
        } else {
          reject( response.data.message );
        }
      } catch ( error ) {
        reject( error.message );
      }
    } );
  }
  static async add( data, token ) {
    return new Promise( async ( resolve, reject ) => {
      try {
        const headers = auth( token );
        headers[ "Content-Type" ] = "multipart/form-data";
        const response = await api.post( API.DOCUMENT, data, {
          headers: headers,
        } );
        if ( response.status === 200 && response.data ) {
          resolve( response.data );
        } else {
          reject( response.data.message );
        }
      } catch ( error ) {
        reject( error.response.data );
      }
    } );
  }
  static async delete( id, token ) {
    return new Promise( async ( resolve, reject ) => {
      try {
        const headers = auth( token );
        const response = await api.delete( API.DOCUMENT + `/${ id }`, {
          headers: headers,
        } );
        if ( response.status === 200 && response.data ) {
          resolve( response.data );
        } else {
          reject( response.data.message );
        }
      } catch ( error ) {
        reject( error.message );
      }
    } );
  }
}
