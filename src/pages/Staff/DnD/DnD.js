import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addPersonToCol, removePersonFromCol} from '../../../store/distribution/actions';
import Droppable from '../../../components/DnD/Droppable/Droppable';
import { Wrapper,ProjectsWrapper, ProjectTitleWrapper, ProjectsContent} from './DnD.styled';
import {TitleH4} from '../../../UI/TitleH4.styled';

const DnDComponent = ({ distributionState, isAddPersonToCol, isRemovePersonFromCol }) => {

  return (
    <Wrapper>
      {Object.keys(distributionState).slice(0,1).map((col, i) => (
        <Droppable
          key={i}
          currentState={distributionState}
          id={col}
          isTeamCol={true}
          isAddPersonToCol={isAddPersonToCol}
          isRemovePersonFromCol={isRemovePersonFromCol} />
      ))}
      <ProjectsWrapper>
        <ProjectTitleWrapper headerColor={'white'}>
          <TitleH4>Projects</TitleH4>
        </ProjectTitleWrapper>
        <ProjectsContent>
          {Object.keys(distributionState).slice(1).map((col, i) => (
            <Droppable
              key={i}
              currentState={distributionState}
              id={col}
              isTeamCol={false}
              isAddPersonToCol={isAddPersonToCol}
              isRemovePersonFromCol={isRemovePersonFromCol} />
          ))}
        </ProjectsContent>
      </ProjectsWrapper>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  distributionState: {...state.teamDistribution.projectDistribution}
});

const mapDispatchToProps = (dispatch) => ({
  isAddPersonToCol: bindActionCreators(addPersonToCol, dispatch),
  isRemovePersonFromCol: bindActionCreators(removePersonFromCol, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DnDComponent);