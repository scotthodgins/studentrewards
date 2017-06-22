import React, { Component } from 'react';



var styles = {
    container: {
        background: "rgb(220,220,220)",
        color: "rgb(30,30,30)"
    },
    name: {
        color: "pink"
    },
    level: {
        color: "yellow"
    },
    photo: {
        background: "blue"
    }
};

export default class StudentThumbnail extends Component {
            
    render() {
        var studentPhoto = "";
        var studentName = this.props.studentName;
        var studentLevel = this.props.level;
        return (
            <div style={styles.container}>
                <img style={styles.photo} src={studentPhoto} />
                <span style={styles.name}>{studentName}</span>
                <span style={styles.level}>{studentLevel}</span>
            </div>
        );
    }
}