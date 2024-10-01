import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

export const get_current_datetime = () => {
    let now = DateTime.now().setZone('America/Bogota').toFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    return now;
};
export const generate_user_id = () => {
    const randomString = uuidv4().slice(0, 20);
    return randomString;
}