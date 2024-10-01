export const CHANGE_TITLE = 'sets new title to the honme page';

export function changeTitle(title) {
  
  return {
    type: CHANGE_TITLE,
    payload: title,
  };
}
