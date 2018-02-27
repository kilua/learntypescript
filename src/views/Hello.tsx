import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    levelantusias?: number;
}

function Hello({ name, levelantusias = 1 }: Props) {
    if (levelantusias <= 0) {
        throw new Error('eror');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(levelantusias)}
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}