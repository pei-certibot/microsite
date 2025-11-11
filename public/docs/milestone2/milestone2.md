# 1. Functional Requirements (Organized by UI)

## Chatbot UI

### Input Handling

1. The system must allow users to select a compliance clause from a provided list.
2. The system must allow users to write free-text queries regarding compliance clauses or controls.

### Contextual Relevance

3. The chatbot must process the user’s query, identifying the user’s intent and key entities related to regulatory requirements.
4. The chatbot’s answer must be directly relevant to the specific question asked by the user.
5. The chatbot must use the conversation context to tailor responses (e.g., remembering previous user questions within the same session).

### Clarification

6. If the chatbot detects ambiguity or missing information in the user's question, it must prompt the user for clarification before providing an answer.

### Session Management

7. The chatbot must maintain the context of the conversation during the user’s session to ensure ongoing relevance of responses and follow-ups.

### Clause Processing

8. The system must parse selected clauses or user queries to identify the compliance requirement.

### Guidance Generation

9. The system must generate step-by-step implementation guidance for the selected or queried clause.
10. The system must ensure that all guidance is written in clear, accessible, and non-legal language.

### Examples and Templates

11. The system must provide at least one example or template relevant to the selected compliance standard and clause.
12. The system must tailor examples and templates to match the standard (e.g., ISO 27001, GDPR).

### User Interaction

13. The system must present guidance and examples in a conversational format within the chatbot UI.
14. The system must allow users to request additional clarification or further examples/templates.

### Context Awareness

15. The system must maintain the context of the user’s selected standard or regulatory framework throughout the session.

### Account Authentication

16. The system must provide a login screen requiring registered users to authenticate using their credentials (e.g., username/email and password).
17. The system must verify the user’s credentials and grant access if authentication is successful.
18. The system must display appropriate error messages for failed login attempts.

### Access Control

19. Upon successful login, the system must identify the user and provide access to their personalized dashboard.

### History Tab Visibility

20. The system must provide a clearly labeled "History" tab accessible from the user's main interface after login.

### Persistence of History

21. The system must store each user’s implementation history (actions taken, records created, etc.).
22. The system must store each user’s chat history (messages and conversations with the chatbot).
23. The system must associate all implementation and chat records with the user’s unique account.

### History Tab Content

24. The "History" tab must present a chronological or otherwise organized list of the user’s past implementation activities.
25. The "History" tab must present a chronological or otherwise organized list of the user’s previous chats with the chatbot.
26. The system must allow the user to view both implementation and chat histories, either combined or in separate sections, as specified in the UI design.

### Security and Privacy

27. The system must ensure that only authenticated users can access their own history tab and associated records.
28. The system must prevent users from viewing or accessing the histories of other users.

---

## Norm Review UI

### Mapping Management Interface

1. The system must provide an interface for Compliance Specialists to view, create, edit, approve, or delete information mappings used by the AI.

### Validation

2. The system must validate all mapping modifications before saving (e.g., for completeness, uniqueness, integrity, and correct data formats).

### Persistence

3. The system must store updated, approved, created, or deleted mappings in a secure and persistent database.

### Chatbot Availability

4. The system must ensure that all updated or newly approved mappings are available for chatbot use immediately after successful save.

### Audit Logging

5. The system must record all mapping changes (edit, creation, deletion, approval) with user identity and timestamps.

### Confirmation & Feedback

6. The system must notify the Compliance Specialist whether the mapping change was saved successfully or if any error occurred.

### History Interface

7. The system must provide an interface for Compliance Specialists to view a detailed history of all changes (edits, approvals, deletions, creations) to AI information mappings.

### Log Details

8. The system must record, for each mapping change, the user who made the change, the timestamp, and the nature of the change (e.g., what was modified, old and new values).

### Chronological Organization

9. The system must display the change history in a readable, chronological order by default.

### Traceability

10. The system must enable Compliance Specialists to review the full audit trail of mapping modifications for traceability and compliance purposes.




# 2. Use Cases

# 3. Workflow Diagrams

# 4. Database Design


# 5. Architecture Design
## 5.1 Component-Level Diagram
## 5.2 Container-Level Diagram
# 6. Mockups and UI Design
During this milestone, we have tried a new approach to the UI design. We thought that it would be a great idea to create a "Zero-Layer" / Tiling interface for our project.
This means that, in every single view, the user will be able to interact with the application through a series of tiles that can be resized, to fit the user's needs.

![Mockup - Tiling Version](../../../docs/milestone2/chatbot.png)
![Mockup - Tiling Version](../../../docs/milestone2/chatbot-1.png)

*Images: 2 different views of the chatbot interface, depending on user context.*