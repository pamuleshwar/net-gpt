import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';

// this will give helper functions 
const openai = new OpenAI({
  apiKey: OPENAI_KEY,dangerouslyAllowBrowser: true,
});

export default openai;