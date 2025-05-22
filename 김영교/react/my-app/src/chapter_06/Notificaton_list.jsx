import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다.',
  },
  {
    id: 2,
    message: '점심식사 시간입니다.',
  },
  {
    id: 3,
    message: '이제 곧 미팅이 시작됩니다.',
  },
];

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { notifications } = this.state;
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        const nextNotification = reservedNotifications[index];
        this.setState({
          notifications: [...notifications, nextNotification],
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(this.timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification, index) => (
          <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
          />
        ))}
      </div>
    );
  }
}

export default NotificationList;
