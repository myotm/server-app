import { Document } from 'mongoose';

interface Article extends Document {
    id: string;
    author: string;
    description: string;
}

export default Article;