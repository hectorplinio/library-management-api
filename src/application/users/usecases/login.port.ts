export interface LoginUser {
  execute(username: string, password: string): Promise<{ token: string }>;
}
