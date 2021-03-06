/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch';
import classNames from 'classnames';
import BrightwheelComponent from './brightwheel-component';
import Label from './label';

class RadioButton extends BrightwheelComponent {

  render() {
    let classes = classNames(
      'radio',
      this.properties.classNames
    );

    return (
      <div {...this.properties.attributes} className={classes}>
        <Label text={this.properties.text}>
          <input type="radio" name={this.properties.name} checked={this.properties.checked}></input>
        </Label>
      </div>
    );
  }

}

export default RadioButton;
