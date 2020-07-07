import { environment } from "./../../../environments/environment";
export class ApiConstants {
  
  public static EFORMS_ATTACHMENTS = environment.host + "/v2/private/eforms/{eformId}/attachments";
  public static FILES = environment.host + "/v2/private/files";
  public static UPLOAD = environment.host + "/v2/private/attachments/upload";
  public static DOWNLOAD = environment.host + "/v2/private/attachments/download";
  
}
