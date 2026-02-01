import { nanoid } from 'nanoid';

const generateId = (prefix) => `${prefix}-${nanoid(16)}`;

export default generateId;
