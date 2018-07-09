module.exports = app => {
    app.logger.debug('debug info');
    app.logger.warn('warning!');
    app.logger.error('error');
  };