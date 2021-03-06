import { BpmnProperty } from '../bpmn/properties';
import { createIdProperty } from './id-cardview-property';
import { createNameProperty } from './name-cardview-property';
import { createImplementationProperty } from './implementation-cardview-property';
import { createVersionProperty } from './version-cardview-property';
import { createDocumentationProperty } from './documentation-cardview-property';
import { createVariablesProperty } from './variables-cardview-property';
import { createAssigneeProperty } from './assignee-cardview-property';
import { createCandidateGroupsProperty } from './candidateGroups-cardview-property';
import { createCandidateUsersProperty } from './candidateUsers-cardview-property';
import { createDueDateProperty } from './dueDate-cardview-property';
import { createPriorityProperty } from './priority-cardview-property';
import { createCalledElementProperty } from './calledElement-cardview-property';
import { createProcessVariablesProperty } from './process-variable-item-property';
import { createExpressionProperty } from './expression-cardview-property';

export const bpmn2cardView = {
    [BpmnProperty.id]: createIdProperty,
    [BpmnProperty.name]: createNameProperty,
    [BpmnProperty.version]: createVersionProperty,
    [BpmnProperty.documentation]: createDocumentationProperty,
    [BpmnProperty.implementation]: createImplementationProperty,
    [BpmnProperty.variables]: createVariablesProperty,
    [BpmnProperty.assignee]: createAssigneeProperty,
    [BpmnProperty.candidateGroups]: createCandidateGroupsProperty,
    [BpmnProperty.candidateUsers]: createCandidateUsersProperty,
    [BpmnProperty.dueDate]: createDueDateProperty,
    [BpmnProperty.priority]: createPriorityProperty,
    [BpmnProperty.calledElement]: createCalledElementProperty,
    [BpmnProperty.properties]: createProcessVariablesProperty,
    [BpmnProperty.conditionExpression]: createExpressionProperty
};
