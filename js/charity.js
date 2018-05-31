var detect_device = 'desktop';
      isPhone = navigator.userAgent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|iPhone|android|iemobile|mobile)/i) != null;
      isTablet = navigator.userAgent.match(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i) != null;
      if (isTablet) isPhone = false;
      if (isPhone) detect_device = 'phone';
      if (isTablet) detect_device = 'tablet';
players=[];
var bcJumpstart= {
players
};
