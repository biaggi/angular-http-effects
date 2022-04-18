export type StatusType = 'loading' | 'idle' | 'error';

export interface PayloadErrorIface {
  message: string
  url: string
  status: number
  name: string
}
