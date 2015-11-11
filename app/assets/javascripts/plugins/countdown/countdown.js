/*
 * jQuery The Final Countdown plugin v1.0.0
 * http://github.com/hilios/jquery.countdown
 *
 * Copyright (c) 2011 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($) {
  
  $("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 1.1,
    "fg_width": 0.04666666666666667,
    "circle_bg_color": "#e9e9e7",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#C42A24",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#C42A24",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#C42A24",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#C42A24",
            "show": true
        }
    }
  });
  
})(jQuery);