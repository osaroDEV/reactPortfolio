import React from 'react';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoGitBranch,
  IoLogoNodejs,
  IoTerminal,
  IoLogoSass,
  IoLogoFigma,
} from 'react-icons/io5';
import { DiJqueryLogo } from 'react-icons/di';
import { FcMultipleDevices } from 'react-icons/fc';
import { FaAccessibleIcon, FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiStyledComponents,
  SiVisualstudiocode,
  SiNpm,
} from 'react-icons/si';

const SkillsTools = () => {
  return (
    <div className='skills'>
      <div className='section-header sm-font'>my toolbox</div>
      <h2>Skills & Tools</h2>
      <div className='skill-icons'>
        <div className='icon-set'>
          <div className='icon-wrapper'>
            <IoLogoReact className='react' />
            <span>react</span>
          </div>
          <div className='icon-wrapper'>
            <SiTypescript className='typescript' />
            <span>typescript</span>
          </div>
          <div className='icon-wrapper'>
            <SiRedux className='typescript' />
            <span>redux</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoJavascript className='javascript' />
            <span>javascript</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoHtml5 className='html' />
            <span>html5</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoCss3 className='css' />
            <span>css3</span>
          </div>
          <div className='icon-wrapper'>
            <SiStyledComponents className='css' />
            <span>styled</span>
          </div>
          <div className='icon-wrapper'>
            <DiJqueryLogo className='jquery' />
            <span>jquery</span>
          </div>
          <div className='icon-wrapper'>
            <IoGitBranch className='git' />
            <span>git</span>
          </div>
          <div className='icon-wrapper'>
            <FaGithub className='css' />
            <span>github</span>
          </div>
          <div className='icon-wrapper'>
            <SiNpm className='html' />
            <span>npm</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoNodejs className='nodejs' />
            <span>nodeJS</span>
          </div>
          <div className='icon-wrapper'>
            <IoTerminal className='terminal' />
            <span>terminal</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoSass className='sass' />
            <span>sass</span>
          </div>
          <div className='icon-wrapper'>
            <IoLogoFigma className='figma' />
            <span>figma</span>
          </div>
          <div className='icon-wrapper'>
            <FcMultipleDevices className='devices' />
            <span>response</span>
          </div>
          <div className='icon-wrapper'>
            <FaAccessibleIcon className='layout' />
            <span>a11y</span>
          </div>
          <div className='icon-wrapper'>
            <SiVisualstudiocode className='devices' />
            <span>vscode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTools;
