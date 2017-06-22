import React, { Component } from 'react';
import StudentThumbnail from '../components/studentthumbnail';

export default class ClassList extends React.Component {
    render() {
        return  (
            <div>
                <StudentThumbnail photo="#" studentName="Oliver" level="7" />
            </div>
        );
    }
};